import React, {useEffect, useState} from 'react';
import { ResponsivePie } from '@nivo/pie';
import {formatStringToNumber} from '../../utils/formatValues';

const InvestmentGraph = ({investments}) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(investments)
  }, [investments]);

  const getPercentageByInvestmentType = (type, total, investments) => {
    return (100 * investments.reduce((sum, cur) => cur.type === type ? sum + formatStringToNumber(cur.value) : sum, 0)) / total;
  }

  function formatDataForGraphComponent(investments) {
    if (investments && investments.length > 0) {
      const total = investments.reduce((sum, cur) => sum + formatStringToNumber(cur.value), 0);
      return [
        { id: "Renda fixa", label: "Renda fixa", value: getPercentageByInvestmentType('RENDA_FIXA', total, investments) },
        { id: "Renda variável", label: "Renda variável", value: getPercentageByInvestmentType('RENDA_VARIAVEL', total, investments) }
      ];
    } 

    return [];
  }

  return (
    <div className="charts">
      {
        (graphData && graphData.length > 0)
        &&
        <ResponsivePie
          data={formatDataForGraphComponent(graphData)}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          colors={["#10C0C6", "#50df8f"]}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: 'color' }}
          isInteractive={false}
          enableRadialLabels={false}
          sliceLabel={({value}) => `${value}%`}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000'
                  }
                }
              ]
            }
          ]}
        />
      }
    </div>
  )
}

export default InvestmentGraph;