<template>
  <div>
    <Widget v-if="showWidget" @closed="showWidget = false" />
    <a
      href="#!"
      @click="showWidget = !showWidget"
      v-if="!showWidget"
      class="floating-button"
      ><span class="material-icons">question_answer</span></a
    >
  </div>
</template>

<script>
import Widget from "../app/Widget.vue";

export default {
  data() {
    return {
      showWidget: false,
    };
  },
  methods: {},
  components: {
    Widget,
  },
};
</script>

<style>
.floating-button {
  text-decoration: none;
  width: 70px;
  height: 70px;
  background-color: #0360a5;
  border-radius: 100%;
  text-align: center;
  position: fixed;
  display: flex;
  justify-content: center;
  box-shadow: -1px 9px 14px -10px #151461c7;
  bottom: 40px;
  right: 40px;
}

.floating-button > span {
  font-size: 180%;
  align-self: center;
  color: white;
}

.d-flex {
  display: flex;
}

.flex-vertical {
  flex-direction: column;
}

.flex-horizontal {
  flex-direction: row;
}

.text-grey {
  color: #585858;
}

.icon-18 {
  font-size: 18px;
}

.m-0 {
  margin: 0;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-20{
  margin-bottom: 20px;
}

.mt-10 {
  margin-top: 10px;
}

.mr-10{
  margin-right: 10px;
}

.app-card {
  margin: 10px 0px;
  padding: 15px;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.1)
}

.app-card-content{
  display: flex;
}

.no-flex{
  display: block !important;
}

.card-nopadding {
  padding: 0;
}

.options-card {
  background-color: #f4f8f9;
  flex-basis: 78%;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
}

.option-menu {
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
}

.options > div:first-child {
  flex-basis: 80%;
}

.options > div:last-child {
  flex-basis: 20%;
}

.app-bar {
  background-color: #0360a5;
  color: white;
}

.app-bar > div {
  display: flex;
  width: 100%;
}

.app-bar > .profile-bar > .app-bar-menu {
  padding: 12px 14px 12px 14px;
  flex-grow: 4;
}

.app-bar > .step-bar{
  padding: 12px 14px 0px 14px;
}

.step-bar > .app-bar-menu{
  flex-grow: 2;
  justify-content: center;
  padding-bottom: 12px;
}

.step > .step-number{
  width: 25px;
  height: 25px;
  justify-content: center;
  border-radius: 100%;
  display: flex;
  color: #0360a5;
  background-color: #bebebe;
}

.step > .step-label{
  margin-left: 10px;
  color: #bebebe;
}

.active-step{
  border-bottom: solid 4px white;
}

.active-step > .step-number{
  background-color: white !important;
}

.active-step > .step-label{
  color: white !important;
}

.step-number > span{
  margin: auto;
}

.app-bar > .profile-bar > .profile-picture {
  flex-grow: 1 !important;
}

.app-bar > .profile-bar > .user-profile {
  align-self: center;
}

.app-bar > .profile-bar > .date-icon {
  text-align: center;
  align-self: center;
}

.app-bar > .profile-bar > .profile-picture {
  align-content: center;
}


.app-btn {
  text-decoration: none;
  padding: 10px;
  background-color: white;
  margin: 4px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.9);
}

.color-success {
  color: #71cc71;
}

.color-primary {
  color: #0360a5;
}

.color-grey{
  color: #363636;
}

.color-grey-lighter{
  color: #a8a8a8;
}

.color-secondary{
  color: #5a94c4;
}


.app-btn-success {
  background-color: #71cc71 !important;
  color: white !important;
}

.app-btn-secondary-outlined{
  background-color: white i !important;
  border: solid 1px #5a94c4;
  color: #5a94c4;
}

.app-btn-success-outlined {
  background-color: white i !important;
  border: solid 1px #71cc71;
  color: #71cc71;
}

.profile-wrapper {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin: auto auto auto auto;
}

.chat-profile,
.chat-bubble {
  margin: 0px 10px 0px 10px;
}

.chat-profile {
  flex-basis: 10%;
}

.chat-bubble {
  padding: 15px;
  border-radius: 5px;
}

.chat-bubble-ask {
  flex-basis: 72%;
  margin-left: 10%;
  background-color: #0360a5;
  color: white;
}

.chat-bubble-repl {
  flex-basis: 60%;
  background-color: #f6f7f9;
}



.profile-wrapper > img {
  display: block;
  width: 100%;
  height: 100%;
}

.app-chat-wrapper {
  margin: 10px 0px;
}

.text-center {
  text-align: center;
  margin: auto;
}

.radio-wrapper {
  padding: 10px 0px;
  margin: 15px 0px;
  justify-content: center;
}

.radio-wrapper > .app-radio {
  margin: 0;
}

.app-bottom-bar {
  background-color: white;
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
  color: rgb(128, 128, 128);
}

.bottom-bar-wrapper {
  justify-content: center;
}

.bottom-bar-wrapper > .chat-emoji,
.chat-sent {
  flex-basis: 20%;
}

.bottom-bar-wrapper > .chat-input {
  flex-basis: 80%;
}

.chat-input-message {
  width: 100%;
  height: 32px;
  border: none;
}

.app-nolink {
  text-decoration: none;
  color: inherit;
}

.no-underline{
  text-decoration: none;
}
</style>
