import React from 'react';
import { UncontrolledCollapse, Table } from 'reactstrap';

function Services(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-sm-10 offset-sm-1">

                    {/* haircuts and others */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="cut" style={{ marginBottom: '1rem' }}>Haircuts and Others</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#cut">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td> Women's haircut</td>
                                        <td className="d-flex justify-content-end">$65</td>
                                    </tr>
                                    <tr>
                                        <td>Men's haircut</td>
                                        <td className="d-flex justify-content-end">$30</td>
                                    </tr>
                                    <tr>
                                        <td>Beard trim</td>
                                        <td className="d-flex justify-content-end">$5</td>
                                    </tr>
                                    <tr>
                                        <td>Child's cut 12 and under</td>
                                        <td className="d-flex justify-content-end">$23</td>
                                    </tr>
                                    <tr>
                                        <td>Shampoo only</td>
                                        <td className="d-flex justify-content-end">$5</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* treatments */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="treat" style={{ marginBottom: '1rem' }}>Treatments</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#treat">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Deep conditioning treatment</td>
                                        <td className="d-flex justify-content-end">$30</td>
                                    </tr>
                                    <tr>
                                        <td>Treatment with blowout</td>
                                        <td className="d-flex justify-content-end">$65</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* color */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="color" style={{ marginBottom: '1rem' }}>Color</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#color">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Base color only</td>
                                        <td className="d-flex justify-content-end">$80</td>
                                    </tr>
                                    <tr>
                                        <td>Base color and haircut</td>
                                        <td className="d-flex justify-content-end">$130</td>
                                    </tr>
                                    <tr>
                                        <td>All over color and haircut</td>
                                        <td className="d-flex justify-content-end">$160</td>
                                    </tr>
                                    <tr>
                                        <td>Gloss only</td>
                                        <td className="d-flex justify-content-end">$60</td>
                                    </tr>
                                    <tr>
                                        <td>Foil highlights, gloss, and haircut</td>
                                        <td className="d-flex justify-content-end">$200</td>
                                    </tr>
                                    <tr>
                                        <td>Color, foil highlights, and haircut</td>
                                        <td className="d-flex justify-content-end">$200</td>
                                    </tr>
                                    <tr>
                                        <td>Balayage, gloss, and haircut</td>
                                        <td className="d-flex justify-content-end">$200</td>
                                    </tr>
                                    <tr>
                                        <td>Balayage/ombré/color melting</td>
                                        <td className="d-flex justify-content-end">$240</td>
                                    </tr>
                                    <tr>
                                        <td>Artistic vivid coloring</td>
                                        <td className="d-flex justify-content-end">$280</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* Brazilian blowout */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="blow" style={{ marginBottom: '1rem' }}>Brazilian Blowout</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#blow">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Brazilian blowout treatment</td>
                                        <td className="d-flex justify-content-end">$250</td>
                                    </tr>
                                    <tr>
                                        <td>Brazilian blowout *long hair</td>
                                        <td className="d-flex justify-content-end">$300</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* thermal */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="thermal" style={{ marginBottom: '1rem' }}>Thermal</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#thermal">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Simple blowout</td>
                                        <td className="d-flex justify-content-end">$45</td>
                                    </tr>
                                    <tr>
                                        <td>Blowout and curled</td>
                                        <td className="d-flex justify-content-end">$55</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* extensions */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="extensions" style={{ marginBottom: '1rem' }}>Extensions</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#extensions">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Extension installation</td>
                                        <td className="d-flex justify-content-end">$225</td>
                                    </tr>
                                    <tr>
                                        <td>Extension adjustment</td>
                                        <td className="d-flex justify-content-end">$140</td>
                                    </tr>
                                    <tr>
                                        <td>Extension removal</td>
                                        <td className="d-flex justify-content-end">$45</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>

                    {/* waxing */}
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a id="wax" style={{ marginBottom: '1rem' }}>Waxing</a>
                        </h4>
                    </div>
                    <UncontrolledCollapse toggler="#wax">
                        <div className="panel-body">
                            <div className="table-responsive">
                                <Table borderless>
                                    <tr>
                                        <td>Brow</td>
                                        <td className="d-flex justify-content-end">$15</td>
                                    </tr>
                                    <tr>
                                        <td>Lip</td>
                                        <td className="d-flex justify-content-end">$15</td>
                                    </tr>
                                    <tr>
                                        <td>Chin</td>
                                        <td className="d-flex justify-content-end">$15</td>
                                    </tr>
                                    <tr>
                                        <td>Brow and lip</td>
                                        <td className="d-flex justify-content-end">$25</td>
                                    </tr>
                                    <tr>
                                        <td>Lip and chin</td>
                                        <td className="d-flex justify-content-end">$25</td>
                                    </tr>
                                    <tr>
                                        <td>Sideburns</td>
                                        <td className="d-flex justify-content-end">$25</td>
                                    </tr>
                                    <tr>
                                        <td>Ears</td>
                                        <td className="d-flex justify-content-end">$15</td>
                                    </tr>
                                    <tr>
                                        <td>Full face</td>
                                        <td className="d-flex justify-content-end">$45</td>
                                    </tr>
                                </Table>
                            </div>
                        </div>
                    </UncontrolledCollapse>
                </div>
            </div>
        </div>
    );
}

export default Services;