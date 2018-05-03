import React from 'react';
import './Quote.css';

class Quote extends React.Component {
    quote;
    constructor(props) {
        super(props);
        this.quote = props.quote;
    }

    render() {
        return (
            <div className="quote">
                <div className="quote-title">
                    <h3>{this.quote.Name}</h3>
                </div>
                <div className="quote-info">
                    Due date: {this.quote.DueDate}<br/>
                    Created date: {this.quote.CreateDate}<br/>
                    Name: {this.quote.Name}<br/>
                    Description: {this.quote.Description}<br/>
                    Quote status: {this.quote.QuoteStatus}<br/>
                    RFQId: {this.quote.RFQId}<br/>
                    Last changed date: {this.quote.LastChangeDate}<br/>
                    Valid through: {this.quote.ValidThrough}<br/>
                    Source quote Id: {this.quote.SourceQuoteId}<br/>
                    Margin: {this.quote.Margin}<br/>
                    OwnerId: {this.quote.OwnerId}<br/>
                    CreatorId: {this.quote.CreatorId}<br/>
                    AccountId: {this.quote.AccountId}<br/>
                    CustomerId: {this.quote.CustomerId}<br/>
                    Id: {this.quote.Id}<br/>
                    Currency:
                            Name: {this.quote.Currency.Name}
                            Format: {this.quote.Currency.Format}<br/>

                    Prices:
                    <ul>
                        {this.quote.Price.Items.map(i => 
                        <li>
                            <b>{i.Name}</b><br/>
                            Value: {i.Value}<br/>
                            Group: {i.Group}<br/>
                        </li>) }
                    </ul>

                    Costs:
                    <ul>
                        {this.quote.Costs.map(i => 
                        <li>
                            <b>{i.Name}</b><br/>
                            Value: {i.Value}<br/>
                            Group: {i.Group}<br/>
                            Quantity: {i.Quantity}<br/>
                            TotalValue: {i.TotalValue}<br/>
                        </li>) }
                    </ul>

                    Files:
                    <ul>
                        {this.quote.Files.map(i => 
                        <li>
                            <b>{i.Name}</b><br/>
                            Url: {i.Url}<br/>
                            Created date: {i.CreateDate}<br/>
                            Quantity: {i.Quantity}<br/>
                            Creator Id: {i.CreatorId}<br/>
                        </li>) }
                    </ul>

                </div>
            </div>
        );
    }
}

export default Quote;
