import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  // const res = await prisma.musician.createMany({
  //   data: [
  //     {
  //       name: '이현/미드낫',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/midnot.jpeg',
  //       space: 390,
  //     },
  //     {
  //       name: '방탄소년단',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/bts.png',
  //       space: 260,
  //     },
  //     {
  //       name: '투모로우바이투게더',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/tbt.jpeg',
  //       space: 130,
  //     },
  //     {
  //       name: 'ENHYPEN',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/enhypen.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: 'ILLIT',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/illit.jpeg',
  //       space: 390,
  //     },
  //     {
  //       name: 'LE SSERAFIM',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/lesserafim.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: '나나',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/nana.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: '범주',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/bumju.jpeg',
  //       space: 390,
  //     },
  //     {
  //       name: '백호(강동호)',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/baekho.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: '황민현',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/minhyeon.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: '세븐틴',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/seventeen.jpeg',
  //       space: 130,
  //     },
  //     {
  //       name: 'fromis_9',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/fromise9.jpeg',
  //       space: 390,
  //     },
  //     {
  //       name: 'TWS',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/tws.jpeg',
  //       space: 390,
  //     },
  //     {
  //       name: '지코',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/zico.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: 'BOYNEXTDOOR',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/boy.jpeg',
  //       space: 130,
  //     },
  //     {
  //       name: 'NewJeans',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/newjeans.png',
  //       space: 390,
  //     },
  //     {
  //       name: '&TEAM',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/team.jpeg',
  //       space: 260,
  //     },
  //     {
  //       name: 'Yurina Hirate',
  //       image:
  //         'https://kkjirzxsewemlplfydin.supabase.co/storage/v1/object/public/images/yurina.jpeg',
  //       space: 390,
  //     },
  //   ],
  // })
  // return Response.json('ok!')
}
