import Vue from "vue";

const EventBus = new Vue();

if (!Vue.prototype.$bus) {
    Object.defineProperties(Vue.prototype, {
        $bus: {
            get: function () {
                return EventBus;
            },
        },
    });
}

export default EventBus;
