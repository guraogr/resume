import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Props {
  label?: string
}

export const Tag: React.FC<Props> = memo(function Tag({ label, ...args }) {
  return (
    <CustomText
      color={semanticColors.primary}
      fw={'bold'}
      bg={semanticColors.primaryPale}
      px={spacing[2]}
      display={'inline-block'}
      sx={{ borderRadius: 100 }}
      {...args}
    >
      {label}
    </CustomText>
  )
})
