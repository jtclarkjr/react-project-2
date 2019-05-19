import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import 'rc-tabs/assets/index.css';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from '../../../components/UI/Container';
import ChartCurrentRates  from '../../../components/Charts/ChartCurrentRates';
import ChartJPYLine  from '../../../components/Charts/ChartJPYLine';
import ChartJPY from '../../../components/Charts/ChartJPY';

import SectionWrapper from './updateScreen.style';

const UpdateScreen = ({ secTitleWrapper, secText, secHeading }) => {
  return (
    <SectionWrapper id="screenshot_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="Currency Rates" />
          <Heading
            {...secHeading}
            content="Currency rates with actual data"
          />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {
            <TabPane tab="East Asia" key="1">
            <Container>
              <ChartCurrentRates/>
            </Container>  
            </TabPane>
          }
          {
            <TabPane tab="Japan" key="2">
            <Container>
              <ChartJPY/> 
            </Container>
            </TabPane>
          }
        {
            <TabPane tab="Japan (5 Days)" key="3">
            <Container>
              <ChartJPYLine/>
            </Container>
            </TabPane>
          }
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ff4362',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
};

export default UpdateScreen;
