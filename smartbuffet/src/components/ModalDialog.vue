<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50"
        v-show="showModal"
      >
        <div
          class="flex items-start justify-center min-h-screen pt-24 text-center"
        >
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl p-4 w-3/4"
              role="dialog"
              ref="modal"
              aria-modal="true"
              v-show="showModal"
              aria-labelledby="modal-headline"
            >
              <button class="absolute top-4 right-4">
                <svg  @click="closeModal" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                <!-- <icon-close /> -->
              </button>
              <slot>I'm empty inside</slot>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue';
const props = {
  show: {
    type: Boolean,
    default: false,
  },
};
export default {
  name: 'ModalDialog',
  props,
  setup(props) {
    const showModal = ref(false);
    const modal = ref(null);
    function closeModal() {
      showModal.value = false;
    }
    watch(
      () => props.show,
      show => {
        showModal.value = show;
      },
    );
    return {
      closeModal,
      showModal,
      modal,
    };
  },
};
</script>