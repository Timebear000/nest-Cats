import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '612b902b28969921b64b0c75',
    description: 'id',
    required: true,
  })
  id: string;
}
