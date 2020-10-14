import Vue, { PluginFunction, VueConstructor } from 'vue';


declare const Demolib: PluginFunction<any>;
export default Demolib;

export const Cat: VueConstructor<Vue>;
export const Dog: VueConstructor<Vue>;
export const Fish: VueConstructor<Vue>;
