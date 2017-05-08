var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoForm = require('TodoForm');

describe('TodoForm', ()=>{
    it('should exist', ()=>{
        expect(TodoForm).toExist();
    });

    it('should call onAddTodo if and text is entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todoText.value = 'Test';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Test')
    });
    it('should not call onAddTodo if field is blank', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoForm));

        todoForm.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled;
    });
});