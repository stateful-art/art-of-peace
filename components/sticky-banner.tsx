import { Flex, Link, Text } from '@chakra-ui/react';
import TwitterLogo from '../components/icons/twitter.svg';
import siteConfig from '../content/site.json';
import { event } from '../lib/gtag';

export function StickyBanner() {
  return (
    <Flex as={Link}
          href={siteConfig.url.twitter}
          bg={'yellow.200'}
          color='gray.900'
          alignItems='center'
          position='sticky'
          top={0}
          zIndex={999}
          justifyContent='center'
          py='8px'
          _hover={{ textDecoration: 'none', bg: 'yellow.400' }}
          target='_blank'
          onClick={() => event({
            category: 'Subscription',
            action: 'Clicked the YouTube banner',
            label: 'Sticky YouTube banner on Top'
          })}
    >
      <TwitterLogo style={{ height: '20px', display: 'inline-block', marginRight: '7px' }} />
      <Text as='span' fontWeight={500} fontSize='14px'>
        <Text as='span'>Follow us on twitter!</Text>
      </Text>
    </Flex>
  );
}
