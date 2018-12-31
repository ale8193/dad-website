import React, { Component } from 'react';
import Price from '../common/Price';
import PriceBox from '../common/PriceBox';
import { formatPrice, formatPerc } from '../../utils';

export default class SavingCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                kml: {
                    value: 0,
                    error: false
                },
                kmYear: {
                    value: 0,
                    error: false
                }
            },
            showResult: false,
            costFuel: 0,
            costSaving: 0,
            saving: 0,
            savingPerc: 0
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const { form } = this.state;
        let hasError = false;
        if (form.kml.value <= 0) {
            hasError = true;
            form.kml.error = 'Inserisci un valore maggiore di 0';
        }
        if (form.kmYear.value <= 0) {
            hasError = true;
            form.kmYear.error = 'Inserisci un valore maggiore di 0';
        }
        if (hasError) {
            this.setState({ form });
        } else {
            // Form valid, calculate saving
            const costFuel = (form.kmYear.value / form.kml.value) * this.props.fuelPrice;
            const costSaving = (form.kmYear.value / form.kml.value) * this.props.savingPrice;
            const saving = costFuel - costSaving;
            const savingPerc = (saving * 100) / costFuel;
            console.log(costFuel);
            console.log(costSaving);
            console.log(saving);
            console.log(savingPerc);
            this.setState({
                showResult: true,
                costFuel,
                costSaving,
                saving, 
                savingPerc
            })
        }
    };

    handleChange = (event, name) => {
        const { form } = this.state;
        form[name].value = event.target.value;
        form[name].error = false;
        this.setState({ form });
    };

    render() {
        const { type, fuelPrice, savingPrice, unit } = this.props;
        const { form, showResult } = this.state;

        return (
            <div className="card saving-box shadow">
                <div className="card-body">
                    <h5 className="card-title">
                        Scopri la convenienza del <span className="text-capitalize">{type}</span>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Prezzo al {unit}: <Price price={savingPrice} />
                    </h6>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row my-2">
                            <label htmlFor="kml" className="col-sm-8 col-md-9 font-small col-form-label">
                                Quanti kilometri fai con un litro di benzina? (km/l)
                            </label>
                            <div className="col-sm-4 col-md-3">
                                <input
                                    type="number"
                                    className={form.kml.error ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'}
                                    id="kml"
                                    value={form.kml.value}
                                    onChange={e => this.handleChange(e, 'kml')}
                                />
                                <div className="invalid-tooltip">{form.kml.error}</div>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label htmlFor="kmYear" className="col-sm-8 col-md-9 font-small col-form-label">
                                Quanti kilometri fai mediamente all'anno?
                            </label>
                            <div className="col-sm-4 col-md-3">
                                <input
                                    type="number"
                                    className={form.kmYear.error ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'}
                                    id="kmYear"
                                    value={form.kmYear.value}
                                    onChange={e => this.handleChange(e, 'kmYear')}
                                />
                                <div className="invalid-tooltip">{form.kmYear.error}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="card-link btn btn-outline-primary">
                                Scopri
                            </button>
                        </div>
                    </form>
                    <div className={showResult ? 'result-box show' : 'result-box'}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <PriceBox type="primary" title="Benzina" info={"Prezzo al ltr. " + formatPrice(fuelPrice)} result={this.state.costFuel}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <PriceBox type="primary" title={type} info={"Prezzo al kg " + formatPrice(savingPrice)} result={this.state.costSaving}/>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 col-md-6">
                                <h6 className="text-secondary saving-text">Risparmio annuale: </h6>
                            </div>
                            <div className="col-12 col-md-6">
                                <PriceBox type="secondary" title={type} info={"Risparmi il " + formatPerc(this.state.savingPerc / 100)} result={this.state.saving}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
