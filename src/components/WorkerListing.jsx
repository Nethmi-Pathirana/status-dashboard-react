/*
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col ,CardHeader,CardFooter} from 'reactstrap';

class WorkerListing extends React.Component  {
 constructor() {
        super();
    }

 render() {
  return (
        <div>
        <CardHeader>Overview..</CardHeader>
        <Card block>
        <Card block outline color="transparent">
         <Row>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9090</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
                <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9080</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
                <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9095</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
                <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
            </Row>

        </Card>
        <Card block>
          <Row>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9090</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
                <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9080</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
                <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
              <Col xs="6" sm="4">
            <CardHeader>Server Name: 10.100.5.41:9095</CardHeader>
                <Card block>
                  <Card block>
                  <Row>
                   <Col>CPU:78</Col>
                   <Col>Memory:67%</Col>
                   <Col>Load Avg : 89</Col>
                   <Col>Apps: 5|10</Col>
                  </Row>
                  </Card>
                <Row>
                  <Col sm="8" text-align='left'>
               <Row>
                <b>Server ID:10.100.5.41:9090</b>
                </Row>
            <Row>
                <font size="1.5">Last Updated: 12/12/2017</font>
                </Row>
              </Col>
                  <Col  sm="4" text-align='right'>Status: Active</Col>
                </Row>
                </Card>
              </Col>
            </Row>
        </Card>
         </Card>
        <CardFooter></CardFooter>
        </div>

  );
}
retrieveDashboards() {
          return <DashboardThumbnail />;
    }
};

export default WorkerListing;

