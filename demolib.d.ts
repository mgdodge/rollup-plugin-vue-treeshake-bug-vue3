import { DefineComponent, Plugin } from 'vue';


declare const Demolib: Exclude<Plugin['install'], undefined>;
export default Demolib;

export const Cat: DefineComponent;
export const Dog: DefineComponent;
export const Fish: DefineComponent;
