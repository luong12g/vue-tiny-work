<template>
  <div>
    <editor v-model="my_value" :init="init"></editor>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import "tinymce/icons/default";
import "tinymce/plugins/paste";

export default {
  name: "Home",
  components: {
    editor: Editor,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      my_value: "",
      init: {
        inline: false,
        skin_url: "./tinymce/skins/ui/oxide",
        content_css: "./tinymce/skins/content/default/content.css", //入力欄のデサント
        plugins: ["paste"],
        importcss_append: true,
        forced_root_block: "",
        paste_preprocess: function (plugin, args) {
          console.log(args.content);
        },
      },
    };
  },
  watch: {},
};
</script>

<style></style>
