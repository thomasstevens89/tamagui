import { SelectDemo } from '@tamagui/demos'
import { useMemo, useState } from 'react'
import { Button, Square, Theme, YStack } from 'tamagui'

export default function test() {
  return <ThemeChangeRenderTest />
}

function ThemeChangeRenderTest() {
  const [theme, setTheme] = useState('blue')

  const memoized = useMemo(() => {
    return <Square debug size={100} bc="$background" />
  }, [])

  return (
    <Theme name={theme as any}>
      <YStack>
        <Button
          onPress={() => {
            setTheme((prev) => {
              console.log('hi', prev)
              return prev === 'blue' ? 'red' : 'blue'
            })
          }}
        >
          Change ({theme})
        </Button>

        {memoized}
      </YStack>
    </Theme>
  )
}

// export function getServerSideProps() {
//   return Promise.resolve({})
// }
