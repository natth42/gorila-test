import React, {useEffect, useState} from 'react';
import { ResponsivePie } from '@nivo/pie';
import {formatStringToNumber} from '../../utils/formatValues';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';

const InvestmentGraph = ({investments}) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(investments)
  }, [investments]);

  const getPercentageByInvestmentType = (type, total, investments) => {
    return Number(((100 * investments.reduce((sum, cur) => cur.type === type ? sum + formatStringToNumber(cur.value) : sum, 0)) / total).toFixed(2));
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
    <>
      {
        (graphData && graphData.length > 0)
        ?
        <Paper className="paper-graph">
          <h3>Resumo da Carteira</h3>
          <div className="charts">
            <ResponsivePie
              data={formatDataForGraphComponent(graphData)}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              colors={["#815ae8", "#ed4581"]}
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
              startAngle={-180}
              sliceLabel={({ id, value }) => `${value}%`}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#FFF"
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
          </div>
        </Paper>
        :
        <Skeleton height="400px" />
      }
    </>
  )
}

export default InvestmentGraph;