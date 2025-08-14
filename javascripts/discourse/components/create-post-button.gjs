// This component creates a custom "Create a Post" button
// that replaces the default "New Topic" button with blue styling
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { service } from "@ember/service";
import DButton from "discourse/components/d-button";
import Composer from "discourse/models/composer";
import { i18n } from "discourse-i18n";
import DTooltip from "float-kit/components/d-tooltip";

export default class CreatePostButton extends Component {
  @service router;
  @service currentUser;
  @service composer;

  @tracked hasDraft = this.currentUser?.has_topic_draft;

  get createPostLabel() {
    if (this.hasDraft) {
      return i18n("topic.open_draft");
    } else {
      return settings.button_text || "Create a Post";
    }
  }

  get createPostIcon() {
    return "plus";
  }

  @action
  createPost() {
    this.composer.open({
      action: Composer.CREATE_TOPIC,
      draftKey: Composer.NEW_TOPIC_KEY,
      categoryId: this.args.category?.id,
      tags: Array.isArray(this.args.tag)
        ? this.args.tag.map((tag) => tag.id)
        : this.args.tag
          ? [this.args.tag.id]
          : [],
    });
  }

  <template>
    {{#if @canCreateTopic}}
      <DButton
        @action={{action "createPost"}}
        @icon={{this.createPostIcon}}
        @translatedLabel={{this.createPostLabel}}
        @disabled={{@createTopicDisabled}}
        id="create-post-custom"
        class="btn-primary create-post-button"
      >
        {{#if @createTopicDisabled}}
          <DTooltip>{{i18n "topic.create_disabled_category"}}</DTooltip>
        {{/if}}
      </DButton>
    {{/if}}
  </template>
}
