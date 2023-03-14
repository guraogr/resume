import { Flex, List, Title, type ListItemProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { Tag } from '@/components/ui/Tag'
import CustomText from '@/components/ui/Text'
import { TextBox } from '@/components/ui/TextBox'
import { spacing } from '@/constans'
import { HEADINGS } from '@/styles/typography'

interface Props extends Omit<ListItemProps, 'children'> {
  title: string
  label?: string
  textBox?: string
  children?: React.ReactNode
}

export const ListItem: React.FC<PropsWithChildren<Props>> = memo(
  function ListItem({ title, label, textBox, children, ...args }) {
    return (
      <List.Item {...args}>
        <Flex mb={spacing[2]}>
          <Title size={HEADINGS.H5} order={3} mr={spacing[2]}>
            {title}
          </Title>
          {label !== undefined && <Tag label={label} />}
        </Flex>
        <CustomText>{children}</CustomText>
        {textBox !== undefined && <TextBox mt={spacing[4]}>{textBox}</TextBox>}
      </List.Item>
    )
  }
)
