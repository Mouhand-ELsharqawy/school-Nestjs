import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AuditoriomModule } from './Auditorium/Auditorium.module';
import { BusModule } from './Bus/Bus.module';
import { ClassEquipmentModule } from './ClassEquipment/ClassEquipment.module';
import { ClassroomModule } from './Classroom/Classroom.module';
import { DepartmentModule } from './Department/Department.module';
import { EmployeeModule } from './Employee/Employee.module';
import { EquipmentModule } from './Equipment/Equipment.module';
import { LabModule } from './lab/Lab.module';
import { LabEquipmentModule } from './LabEquipment/LabEquipment.module';
import { ManagementModule } from './Management/Management.module';
import { NoticeBoardModule } from './NoticeBoard/NoticeBoard.module';
import { PlaygroundModule } from './Playground/Playground.module';
import { StudentModule } from './Student/Student.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mohand800001:u7RRxaBSjh1bDjaG@cluster0.5gesuqe.mongodb.net/crud'
      ),
      AuditoriomModule,
      BusModule,
      ClassEquipmentModule,
      ClassroomModule,
      DepartmentModule,
      EmployeeModule,
      EquipmentModule,
      LabModule,
      LabEquipmentModule,
      ManagementModule,
      NoticeBoardModule,
      PlaygroundModule,
      StudentModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
