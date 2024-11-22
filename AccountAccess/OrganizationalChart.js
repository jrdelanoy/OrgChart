
import { OrgChart } from 'd3-org-chart'
// import OrgChart from 'd3-org-chart'


// import { ChartExport } from './ChartExport.jsx'


import React, { useState, useRef, useLayoutEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import NodeContent from './NodeContent'
import ExpandButton from './ExpandButton'

const styles = {
  orgChart: {
    height: 'calc(100vh - 60px)',
    backgroundColor: 'white',
  },
}

export const OrganizationalChart = (props) => {

  const d3Container = useRef(null)
  const [employeeId, setEmployeeId] = useState('')

  useLayoutEffect(() => {
    const toggleDetailsCard = (nodeId) => {
      setEmployeeId(nodeId)
    }
    
    const chart = new OrgChart()

    console.log('CHART CONST', chart)

    if (props.data && d3Container.current) {
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 300)
        .nodeHeight((d) => 150)
        .compactMarginBetween((d) => 80)
        .onNodeClick((d) => {
          toggleDetailsCard(d)
        })
        .buttonContent((node, state) => {
          return ReactDOMServer.renderToStaticMarkup(
            <ExpandButton {...node.node} />
          )
        })
        .nodeContent((d) => {
          return ReactDOMServer.renderToStaticMarkup(<NodeContent {...d} />)
        })
        .render()
    }
  }, [props, props.data])

  return <div style={styles.orgChart} ref={d3Container} />
}
