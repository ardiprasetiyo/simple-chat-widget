<template>
    <div class="app-widget-container">
        <div class="app-widget-bar">
            <div class="app-bar d-flex">
                <div class="profile-bar" v-if="currentStep == steps[0]">
                    <div class="app-bar-menu profile-picture">
                        <div class="profile-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="app-bar-menu user-profile">
                        <h4 class="m-0">Sussanah</h4>
                        <p class="m-0">
                            Agent
                            <span class="color-grey-lighter">(Offline)</span>
                        </p>
                    </div>
                    <div class="app-bar-menu date-icon">
                        <a href="#!" class="app-nolink" @click="closeWidget">
                            <span class="material-icons icon-18"
                                >calendar_today</span
                            >
                        </a>
                    </div>
                </div>

                <div class="step-bar" v-if="currentStep !== steps[0]">
                    <div
                        v-for="(step, stepIndex) of steps"
                        :key="stepIndex"
                        :class="getStepStyle({ stepLabel: step })"
                        @click="currentStep = step"
                    >
                        <div class="step-number">
                            <span
                                ><b>{{ stepIndex + 1 }}</b></span
                            >
                        </div>
                        <div class="step-label">
                            {{ step }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="app-widget-content" ref="chat-wrapper">
            <div class="chat" v-if="currentStep == steps[0]">
                <div
                    class="app-chat d-flex flex-vertical"
                    v-for="(chat, chatIndex) of chats"
                    :key="chatIndex"
                >
                    <div class="d-flex flex-horizontal app-chat-wrapper">
                        <div class="chat-profile" v-if="chat.type == 'ans'">
                            <div class="profile-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div :class="getChatBubbleStyle({ type: chat.type })">
                            <p class="m-0">{{ chat.message }}</p>
                            <!-- Radio  -->
                            <div
                                v-if="
                                    Object.keys(chat).includes('radios') &&
                                    chat.radios
                                "
                            >
                                <div
                                    class="d-flex flex-horizontal radio-wrapper"
                                >
                                    <div class="app-radio text-center">
                                        <a
                                            href="#!"
                                            class="app-btn app-btn-success"
                                            @click="currentStep = steps[1]"
                                        >
                                            <b>Yes</b>
                                        </a>
                                    </div>
                                    <div class="app-radio text-center">
                                        <a
                                            href="#!"
                                            class="app-btn app-btn-success-outlined"
                                        >
                                            <b>No</b>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- End Of Radio -->
                        </div>
                    </div>

                    <!-- Options -->
                    <div
                        class="d-flex flex-horizontal app-options-wrapper mb-10 mt-10"
                        v-if="
                            Object.keys(chat).includes('options') &&
                            chat.options
                        "
                    >
                        <div class="app-card options-card card-nopadding">
                            <div
                                class="option-menu"
                                v-for="(
                                    chatOption, chatOptionIndex
                                ) of chat.options"
                                :key="chatOptionIndex"
                            >
                                <div class="d-flex flex-horizontal options">
                                    <div class="align-center d-flex">
                                        <h5 class="m-0 color-primary">
                                            {{ chatOption }}
                                        </h5>
                                    </div>
                                    <div class="align-center d-flex">
                                        <span
                                            class="material-icons icon-18 text-center"
                                            >chevron_right</span
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="option-menu">
                                <div class="d-flex flex-horizontal">
                                    <div class="text-center d-flex">
                                        <h5 class="m-0 color-success">
                                            More on Help Center
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Review -->
            <div class="review" v-if="currentStep == steps[1]">
                <div class="widget-container">
                    <h3>How these solutions help?</h3>
                    <div class="app-card">
                        <div class="app-card-content flex-vertical">
                            <h4 class="m-0">How do I reset my password?</h4>
                            <hr />
                            <p class="m-0">
                                To reset your password, please visit
                                <a href="#!" class="no-underline">this page</a>.
                            </p>
                        </div>
                        <div class="app-card">
                            <div class="app-card-content no-flex">
                                <span
                                    class="material-icons icon-18 color-success mr-10"
                                    >thumb_up</span
                                >
                                <b>Solved! </b>
                                <span class="color-grey"
                                    >This answers my question</span
                                >
                            </div>
                        </div>
                    </div>

                    <!-- FAQ -->
                    <div class="faq app-card">
                        <div class="app-card-content flex-vertical">
                            <h4 class="m-0">Ask a lawyer FAQ</h4>
                            <hr />
                        </div>
                        <div>
                            <div
                                class="faq"
                                v-for="(faq, faqIndex) of faqs"
                                :key="faqIndex"
                            >
                                <p>
                                    <b>{{ faq.que }}</b>
                                </p>
                                <p>{{ faq.ans }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Completed -->
            <div class="completed" v-if="currentStep == steps[2]">
                <div class="widget-container">
                    <h3>How would you like to contact us?</h3>
                    <p class="text-grey mt-0">
                        We're committed to finding the answer you need as
                        quickly as possible.
                    </p>
                    <div class="d-flex flex-horizontal contacts">
                        <div class="app-card">
                            <div class="app-card-content no-flex text-center">
                                <span
                                    class="material-icons icon-large color-secondary"
                                    >question_answer</span
                                >
                                <h4 class="m-0">Open Chat</h4>
                                <p class="color-grey mb-20">
                                    Chat directly with a support agent to
                                    resolve your issue.
                                </p>
                                <a href="#!" class="app-btn app-btn-success">
                                    <b>Chat Now</b>
                                </a>
                            </div>
                        </div>
                        <div class="app-card">
                            <div class="app-card-content no-flex text-center">
                                <span
                                    class="material-icons icon-large color-secondary"
                                    >email</span
                                >
                                <h4 class="m-0">Email Support</h4>
                                <p class="color-grey mb-20">
                                    Chat directly with a support agent to
                                    resolve your issue.
                                </p>
                                <a href="#!" class="app-btn app-btn-success">
                                    <b>Email Now</b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="app-widget-bottom-bar">

            <!-- Chat Bottom Bar -->
            <div class="app-bottom-bar" v-if="currentStep == steps[0]">
                <div class="d-flex bottom-bar-wrapper">
                    <div class="chat-emoji d-flex flex-horizontal">
                        <span class="material-icons icon-18 text-center"
                            >photo_camera</span
                        >
                    </div>
                    <div class="chat-input d-flex flex-horizontal">
                        <input
                            type="text"
                            class="chat-input-message"
                            placeholder="Send a message"
                            v-model="chatText"
                        />
                    </div>
                    <div class="chat-sent d-flex flex-horizontal text-center">
                        <span class="material-icons icon-18 text-center" @click="sendChat"
                            >send</span
                        >
                    </div>
                </div>
            </div>

            <!-- Review bottom bar -->
            <div class="app-bottom-bar" v-if="currentStep == steps[1]">
                <div class="d-flex bottom-bar-wrapper review-actions">
                    <div class="d-flex flex-horizontal">
                        <div>
                            <a
                                href="#!"
                                class="app-btn app-btn-secondary-outlined d-flex"
                                @click="currentStep = steps[0]"
                            >
                                <span class="material-icons icon-18 mr-10"
                                    >thumb_down</span
                                >
                                <b>I still need help</b>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#!"
                                class="app-btn app-btn-success d-flex"
                                @click="currentStep = steps[2]"
                            >
                                <span class="material-icons icon-18 mr-10"
                                    >thumb_up</span
                                >
                                <b>Solved!</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Completed Bottom Bar -->
            <div class="app-bottom-bar" v-if="currentStep == steps[2]">
                <div class="d-flex bottom-bar-wrapper review-actions">
                    <div class="d-flex flex-horizontal">
                        <div>
                            <a
                                @click="currentStep = steps[1]"
                                href="#!"
                                class="app-btn app-btn-secondary-outlined d-flex"
                            >
                                <span class="material-icons icon-18 mr-10"
                                    >chevron_left</span
                                >
                                <b>Back to Solutions</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAllChats, getCurrentStep, getSteps, getFaqs } from "../js/api";

export default {
    data() {
        return {
            chats: getAllChats(),
            currentStep: getCurrentStep(),
            steps: getSteps(),
            faqs: getFaqs(),
            chatText: ''
        };
    },
    methods: {
        getChatBubbleStyle({ type }) {
            let styles = ["chat-bubble"];
            if (type == "ans") {
                styles.push("chat-bubble-repl");
                return styles;
            }

            styles.push("chat-bubble-ask");
            return styles;
        },
        getStepStyle({ stepLabel }) {
            let styles = ["app-bar-menu d-flex flex-horizontal step"];
            if (stepLabel === this.currentStep) styles.push("active-step");
            return styles;
        },

        sendChat(){
            let text = this.chatText
            if( !text ) return
            this.chats.push({
                type: 'ask',
                message: text
            })
            let chatWrapperRef = this.$refs['chat-wrapper']
            chatWrapperRef.scrollTop = chatWrapperRef.scrollHeight

            this.chatText = ''
        },
        closeWidget() {
            this.$emit("closed", true);
        },
    },
};
</script>

<style scoped>
.widget-container {
    margin: 10px 20px;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    height: 1px;
}

.review-action {
    padding: 10px;
}

.contacts > .app-card {
    flex-basis: 50%;
    margin: 10px;
}

.icon-large {
    font-size: 42px;
}

.app-widget-container {
    width: 400px;
    height: 400px;
    position: fixed;
    right: 20px;
    bottom: 25%;
}

.app-widget-container > div {
    border: solid 1px rgba(0, 0, 0, 0.1);
}

.app-widget-content {
    max-height: 100%;
    overflow-y: scroll;
}
</style>
