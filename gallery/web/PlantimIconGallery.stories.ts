import { PLANTIM_ICON_NAMES, PlantimIcon } from "@plantim/icons";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const names = [...PLANTIM_ICON_NAMES].sort();
const meta: Meta = {
  title: "Plantim Icons/All Icons",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Gallery: Story = {
  render: () => ({
    components: { PlantimIcon },
    setup: () => ({ names }),
    template: `<div class="grid grid-cols-4 gap-4 p-6 sm:grid-cols-6 lg:grid-cols-8">
      <div v-for="name in names" :key="name" class="flex min-h-24 flex-col items-center justify-center gap-2 rounded-md border p-3">
        <PlantimIcon :name="name" size="24" />
        <code class="text-center text-xs">{{ name }}</code>
      </div>
    </div>`,
  }),
};
