import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends React.Component {
    render() {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Page: {this.props.book.pages} </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Whatever returned will show up as props inside BookList
    return {
        book: state.activeBook
    }
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(BookDetail);
