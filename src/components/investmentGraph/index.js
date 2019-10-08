import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { getPercentageByType, getSum } from '../../utils/calcs';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  graphPaper: {
    marginTop: '1rem',
    padding: '1rem',
    marginBottom: '1rem'
  },
  graph: {
    width: '100%',
    height: '400px'
  }
}));

const InvestmentGraph = ({ investments }) => {
  const classes = useStyles();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphData(investments)
  }, [investments]);

  function formatDataForGraphComponent(investments) {
    if (investments && investments.length > 0) {
      const total = getSum(investments);
      return [
        { id: "Renda fixa", label: "Renda fixa", value: getPercentageByType('RENDA_FIXA', total, investments) },
        { id: "Renda variável", label: "Renda variável", value: getPercentageByType('RENDA_VARIAVEL', total, investments) }
      ];
    }

    return [];
  }

  return (
    <>
      {
        (graphData && graphData.length > 0)
          ?
          <Paper className={classes.graphPaper}>
            <Typography variant="h6">Resumo da Carteira</Typography>
            <div className={classes.graph}>
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