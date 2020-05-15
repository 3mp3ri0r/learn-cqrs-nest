import { AggregateRoot } from '@nestjs/cqrs';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';

export class Hero extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  killEnemy(enemyId: string) {
    // logic
    console.log(
      `Do some logic to kill dragon with id ${enemyId} than fire event.`,
    );
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    console.log('Finish fire event');
  }

  addItem(itemId: string) {
    // logic
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }
}
