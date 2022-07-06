// Global services to use in components via svelte context
import { Image } from './image';
import { Guest } from './guest';
import { Event } from './event';

const key = Symbol();

export { key, Event, Guest, Image };