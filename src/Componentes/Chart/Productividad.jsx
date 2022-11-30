
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';


const Productividad = () => {
    const data = [
        {name: "2017", react: -32, angular: 37, vue: 60 },
        {name: "2018", react: 42, angular: 47, vue: 70 },
        {name: "2019", react: 52, angular: 57, vue: 80 },
        {name: "2020", react: 62, angular: 67, vue: 90 },
        {name: "2020", react: 332, angular: 97, vue: 1200 },
    ];
    const data2 = []

  return (
    <LineChart width={442} height={250} data={data}>
    <Line type="monotone" dataKey="react" stroke="#8884d8" strokeWidth={3}/>
    <Line type="monotone" dataKey="angular" stroke="#2196F3" strokeWidth={3}/>
    <Line type="monotone" dataKey={0} stroke="#FFCA29" strokeWidth={3}/>
    <CartesianGrid stroke='#ccc' strokeDasharray="3 3"/>
    <XAxis dataKey={'name'} />
    <YAxis />
    <Tooltip/>
    <Legend />
  </LineChart>
  )
}

export default Productividad;
