import { withPluginApi } from "discourse/lib/plugin-api";
import I18n from "discourse-i18n";

export default {
  name: "create-post-button-text",
  before: "inject-objects",

  initialize() {
    withPluginApi("1.34.0", (api) => {

      // Get the custom button text from settings
      const buttonText = settings.button_text || "Create a Post";

      // Override I18n translations for new topic button
      const originalTranslations = I18n.translations[I18n.currentLocale()];
      if (originalTranslations && originalTranslations.js && originalTranslations.js.topic) {
        // Override the main new topic translation
        originalTranslations.js.topic.create = buttonText;
        originalTranslations.js.topic.create_long = buttonText;

        // Override composer related translations
        if (originalTranslations.js.composer) {
          originalTranslations.js.composer.create_topic = buttonText;
          originalTranslations.js.composer.title_placeholder = "What is this post about?";
        }
      }

      // Use the customizeComposerText API for composer customization
      api.customizeComposerText({
        actionTitle(model) {
          if (!model.topic) {
            return buttonText;
          }
        },

        saveLabel(model) {
          if (!model.topic) {
            // For new topics, use our custom text
            const currentLocale = I18n.currentLocale();
            const topicKey = I18n.translations[currentLocale].js.topic;
            topicKey.custom_create_post_label = buttonText;
            return "topic.custom_create_post_label";
          }
        }
      });

      // DOM manipulation to update button text on page changes
      const updateButtonText = () => {
        setTimeout(() => {
          const createButtons = document.querySelectorAll('#create-topic, .create-topic, [aria-label*="New Topic"], [title*="New Topic"]');
          createButtons.forEach(button => {
            // Update button text content
            if (button.textContent.includes("New Topic")) {
              button.textContent = button.textContent.replace(/.*New Topic.*/, buttonText);
            }

            // Update aria-label and title attributes
            if (button.getAttribute('aria-label')?.includes('New Topic')) {
              button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/New Topic/g, buttonText));
            }
            if (button.getAttribute('title')?.includes('New Topic')) {
              button.setAttribute('title', button.getAttribute('title').replace(/New Topic/g, buttonText));
            }

            // Update data-tooltip attributes
            if (button.getAttribute('data-tooltip')?.includes('New Topic')) {
              button.setAttribute('data-tooltip', button.getAttribute('data-tooltip').replace(/New Topic/g, buttonText));
            }
          });
        }, 100);
      };

      // Run on page changes and initial load
      api.onPageChange(updateButtonText);
      updateButtonText();
    });
  },
};
