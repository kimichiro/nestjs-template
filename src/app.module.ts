import { Module } from '@nestjs/common'
import { ControllerModule } from './controller/controller.module'
import { ServiceModule } from './service/app/service.module'

@Module({
    imports: [
        ServiceModule,
        ControllerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
