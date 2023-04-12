import { Test } from '@nestjs/testing';
import { CommandModule, CommandModuleTest } from 'nestjs-command';
import { AppModule } from 'app-cli/dist/index';
describe('AppModule', () => {
    let commandModule: CommandModuleTest;

    beforeEach(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        const app = moduleFixture.createNestApplication();
        await app.init();
        commandModule = new CommandModuleTest(app.select(CommandModule));
    });

    it('should create todo', async () => {
        const commandText = 'create:user <username>';
        const args = { username: 'Foo', group: 'Bar', saber: false };

        // TODO: mockear repo, usecase. validar que se ejecuta y valida
        const user = await commandModule.execute(commandText, args);
        expect(user.username).toBe('Foo');
        expect(user.group).toBe('Bar');
    });
});
