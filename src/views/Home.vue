<template>
  <div v-if="dataLoaded" class="container mt-10 px-4">
    <!-- No data -->
    <div v-if="data.length === 0" class="flex flex-col items-center w-full">
      <h1 class="text-2xl">Looks empty here...</h1>
      <router-link
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        :to="{ name: 'Create' }"
        >Create Workout</router-link
      >
    </div>
    <!-- Data -->

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <router-link
        class="flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer"
        :to="{ name: 'ViewWorkout', params: { workoutId: workout.id } }"
        :key="index"
        v-for="(workout, index) in data"
      >
        <!-- Cardio image -->
        <img
          v-if="workout.workoutType === 'cardio'"
          class="h-24 w-auto"
          src="@/assets/images/running-light-green.png"
          alt="Run"
        />
        <!-- Strength image -->
        <img
          v-else
          src="@/assets/images/dumbbell-light-green.png"
          alt="strength"
          class="h-24 w-auto"
        />
        <p
          class="mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg"
        >
          {{ workout.workoutType }}
        </p>
        <h1
          class="mt-8 mb-2 flex items-center text-center text-xl text-at-light-green"
        >
          {{ workout.workoutName }}
        </h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase/init";
export default {
  name: "Home",
  components: {},
  setup() {
    // Create data / vars
    const data = ref([]);
    const dataLoaded = ref(false);
    // Get data
    const getData = async () => {
      try {
        const { data: workouts, error } = await supabase
          .from("workouts")
          .select("*");
        data.value = workouts;
        dataLoaded.value = true;
      } catch (error) {
        console.warn(error.message);
      }
    };
    // Run data function
    getData();
    return { data, dataLoaded };
  }
};
</script>
