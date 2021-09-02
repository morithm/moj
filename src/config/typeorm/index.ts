import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { getMetadataArgsStorage } from "typeorm";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            url: `mongodb://localhost:${process.env.MONGO_PORT}`,
			entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
			synchronize: true,
			autoLoadEntities: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			keepConnectionAlive: true,
			logging: true
        };
    }
}