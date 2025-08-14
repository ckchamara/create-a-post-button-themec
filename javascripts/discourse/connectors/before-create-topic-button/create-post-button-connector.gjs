import Component from "@ember/component";
import { tagName } from "@ember-decorators/component";
import CreatePostButton from "../../components/create-post-button";

@tagName("")
export default class CreatePostButtonConnector extends Component {
  <template>
    <CreatePostButton
      @category={{@outletArgs.category}}
      @tag={{@outletArgs.tag}}
      @createTopicLabel={{@outletArgs.createTopicLabel}}
      @createTopicDisabled={{@outletArgs.createTopicDisabled}}
      @canCreateTopic={{@outletArgs.canCreateTopic}}
    />
  </template>
}
