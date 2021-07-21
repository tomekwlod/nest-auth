import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // JwtModule.register({
    // // default implementation
    //   secret: `${process.env.JWT_SECRET_KEY}`,
    //   signOptions: {
    //     expiresIn: `${parseInt(process.env.JWT_EXPIRE, 10) || 60 * 60 * 8}s`,
    //   },
    // }),
    JwtModule.registerAsync({
      // https://stackoverflow.com/a/55673625/1800372
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: { expiresIn: `${config.get('JWT_EXPIRE')}s` },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
