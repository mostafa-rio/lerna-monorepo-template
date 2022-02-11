import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import FcCheck from "@ficoKit/FcCheck";

describe("Home.vue", () => {
  it("renders FcCheck component", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(FcCheck)).toBe(true);
  });
});
