import React from 'react';
import InvestmentForm from './components/investmentForm';
import InvestmentList from './components/investmentList';
import { ResponsivePie } from '@nivo/pie';
import './App.css';

function App() {
  const data = [
    {
      "id": "Renda fixa",
      "label": "Renda fixa",
      "value": 100,
      "color": "#10C0C6"
    },
    {
      "id": "Renda variável",
      "label": "Renda Variável",
      "value": 150,
      "color": "#10C0C6"
    },
  ];

  return (
    <>
      <h1 className="center-text">Carteira de Investimentos</h1>
      <InvestmentForm />
      <div className="list-position">
        <div>
          <InvestmentList type="Renda Fixa" />
        </div>
        <div>
          <InvestmentList type="Renda Fixa" />
        </div>
      </div>
      <h3 className="center-text">Resumo da Carteira</h3>
      <div className="charts">
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            colors={["#10C0C6", "#50df8f"]}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
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
      </div>
    </>
  );
}

export default App;
