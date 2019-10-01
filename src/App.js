import React, {useEffect, useState} from 'react';
import InvestmentForm from './components/investmentForm';
import InvestmentList from './components/investmentList';
import { ResponsivePie } from '@nivo/pie';
import { useInvestmentDispatch, useInvestmentState, getInvestments } from './context/investment-context';
import './App.css';

function App() {
  const dispatch = useInvestmentDispatch();
  const dados = useInvestmentState();
  const [graphData, setGraphData] = useState([]);

  const getNumber = (value) => {
    return Number(value.replace('.', '').replace(',', '.'))
  }

  function formatDataForGraphComponent(investments) {
    if(investments && investments.length > 0){
      return [
          {id: "Renda fixa", label: "Renda fixa", value: investments.reduce( ( sum , cur ) =>  cur.type === 'RENDA_FIXA'? sum + getNumber(cur.value) : sum , 0)},
          {id: "Renda variável", label: "Renda variável", value: investments.reduce( ( sum , cur ) =>  cur.type === 'RENDA_VARIAVEL'? sum + getNumber(cur.value) : sum , 0)}
      ]
    }else {
      return []
    }
  }

  useEffect(() => {
    setGraphData(dados.investments)
  }, [dados.investments])

  useEffect(() => {
    getInvestments(dispatch)
  }, [dispatch]);

  return (
    <>
      <h1 className="center-text">Carteira de Investimentos</h1>
      <InvestmentForm />
      <div className="list-position">
        <div>
          <InvestmentList title="Renda Fixa" type="RENDA_FIXA" items={dados.investments} />
        </div>
        <div>
          <InvestmentList title="Renda Variável" type="RENDA_VARIAVEL" items={dados.investments} />
        </div>
      </div>
      <h3 className="center-text">Resumo da Carteira</h3>
      <div className="charts">
      { 
        (graphData && graphData.length > 0)
        &&       
        <ResponsivePie
            data={formatDataForGraphComponent(graphData)}
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
        }
      </div>
    </>
  );
}

export default App;
