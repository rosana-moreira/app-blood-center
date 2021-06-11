import { text } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBloodcenter1620413358777 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name:'bloodCenters',
      columns:[
        {
          name:'id',
          type:'integer',
          unsigned:true,
          isPrimary:true,
          isGenerated:true,
          generationStrategy:'increment',

        },
        {
          name:'name',
          type:'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          precision: 13,
          scale:2 ,
          
      },
      {
          name: 'longitude',
          type: 'decimal',
          precision: 13,
          scale: 2,
          
      },
        {
          name:'about',
          type:'text',
        },
        {
          name:'instructions',
          type:'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
      },
        {
          name:'open_on_weekends',
          type:'boolean',
          default:false,
        }
      ],

    }))
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bloodCenters');

    }

}
