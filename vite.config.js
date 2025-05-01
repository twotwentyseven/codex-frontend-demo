import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    open: true
  },
  assetsInclude: ['**/*.md'],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        modal: 'modal.html',
        notification: 'notification.html',
        login: 'login.html',
        register: 'register.html',
        password: 'password.html',
        verifysms: 'verifysms.html',
        bundles: 'bundles.html',
        bundleTypes: 'bundle-types.html',
        plans: 'plans.html',
        giftcards: 'giftcards.html',
        cart: 'cart.html',
        scaConfirmation: 'sca-confirmation.html',
        timetable: 'timetable.html',
        timetableList: 'timetable_list.html',
        event: 'event.html',
        waitlist: 'waitlist.html',
        appointments: 'appointments.html',
        videos: 'videos.html',
        video: 'video.html',
        videoCollections: 'video-collections.html',
        videoCollection: 'video-collection.html',
        instructors: 'instructors.html',
        instructor: 'instructor.html',
        instructorAdv: 'instructor-adv.html',
        account: 'account.html',
        accountSetup: 'account-setup.html',
        filters: 'filters.html',
        surveys: 'surveys.html',
        variables: 'variables.html'
      }
    }
  }
}); 