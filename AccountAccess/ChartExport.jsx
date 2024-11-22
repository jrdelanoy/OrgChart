import dynamic from 'next/dynamic'

// Dynamically import OrgChart only on the client side
const OrgChart = dynamic(() => import('d3-org-chart'), { ssr: false })

const ChartExport = () => {
  return new OrgChart()
}

export default ChartExport
