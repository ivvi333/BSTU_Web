<script setup>
import router from "@/router";
import { useMainStore } from "@/store";

const mainStore = useMainStore();

axios.post('/api/logout')
    .then((response) => {
        mainStore.setToken(null);
        router.push({ name: 'home' });
    })
</script>