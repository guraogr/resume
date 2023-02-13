import {
  useMantineTheme,
  Card,
  Image,
  Text,
  Flex,
  Title,
  Box,
  Button,
  Avatar,
} from '@mantine/core'

interface Props {
  /*
    サムネイル画像
  */
  thumbnail: string
  /*
    サムネイル画像の説明
  */
  thumbnailAlt: string
  /*
    背景画像
  */
  bg: string
  /*
    名前
  */
  name: string
  /*
    職種
   */
  job: string
  /*
    githubId
  */
  githubId: string
  /*
    紹介文
  */
  description: string
  /*
  ハッシュタグ
 */
  hashtag?: string
}

export const ProfileCard: React.FC<Props> = (props) => {
  const {
    thumbnail,
    thumbnailAlt,
    bg,
    name,
    job,
    githubId,
    description,
    hashtag,
  } = props
  const theme = useMantineTheme()
  return (
    <Card
      p="lg"
      radius="sm"
      withBorder
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Card.Section>
        <Image src={bg} height={160} alt="" />
      </Card.Section>
      <Flex mt={'-64px'} direction={'column'} align={'center'}>
        <Avatar
          size={108}
          src={thumbnail}
          alt={thumbnailAlt}
          style={{ border: `2px solid ${theme.white}`, borderRadius: '500px' }}
          mb={8}
        />
        <Title mb={2} size={'h4'}>
          {name}
        </Title>
        <Text mb={12} size={'xs'}>
          {job}
        </Text>
        <Box component="a" href={`https://github.com/${githubId}`} mb={12}>
          <Image src={'/images/github.svg'} width={32} alt="github" />
        </Box>
        <Text mb={4} size={'md'}>
          {description}
        </Text>
        <Text mb={16} size="xs" color={'gray.5'}>
          {hashtag}
        </Text>
        <Button component="a" href="/" size="md" mt="md" radius="sm">
          メッセージを送る
        </Button>
      </Flex>
    </Card>
  )
}
