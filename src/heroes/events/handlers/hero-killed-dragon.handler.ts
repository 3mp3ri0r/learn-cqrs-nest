import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent> {
  async handle(event: HeroKilledDragonEvent) {
    await sleep(2000);
    console.log(clc.greenBright('HeroKilledDragonEvent...'));
    console.log(
      `Hero with id ${event.heroId} killed dragon with id ${event.dragonId}`,
    );
  }
}
