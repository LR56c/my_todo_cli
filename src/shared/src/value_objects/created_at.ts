import { z } from 'zod';

export class CreatedAt {
  constructor(public readonly value: Date | string) {
    this.ensureValidDate();
  }

  ensureValidDate(): void {
    z.date().min(new Date()).parse(this.value);
  }
}
