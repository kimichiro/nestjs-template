import { Module } from '@nestjs/common'
import { ControllerModule } from './controller/controller.module'
import { ServiceModule } from './service/service.module'

@Module({
    imports: [
        ServiceModule,
        ControllerModule,
    ],
})
export class AppModule {}
