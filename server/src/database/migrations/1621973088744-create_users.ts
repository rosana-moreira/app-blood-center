import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1621973088744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
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
                name: 'cpf',
                type: 'varchar',
                
            },
            {
                name: 'bloodType',
                type: 'varchar',
                
            },
              {
                name:'telephone',
                type:'varchar',
              },
              {
                name:'city',
                type:'varchar',
              },
              {
                name: 'state',
                type: 'varchar',
            },
            ],
      
          }));
          };
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
