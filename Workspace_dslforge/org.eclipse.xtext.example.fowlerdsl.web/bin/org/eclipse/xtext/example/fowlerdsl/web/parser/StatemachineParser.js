// $ANTLR 3.3 avr. 19, 2016 01:13:22 D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g 2017-01-22 22:24:43



var StatemachineParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    StatemachineParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(StatemachineParser, {
    EOF: -1,
    T__9: 9,
    T__10: 10,
    T__11: 11,
    T__12: 12,
    T__13: 13,
    T__14: 14,
    T__15: 15,
    T__16: 16,
    T__17: 17,
    ID: 4,
    STRING: 5,
    COMMENT: 6,
    WS: 7,
    INT: 8
});

(function(){
// public class variables
var EOF= -1,
    T__9= 9,
    T__10= 10,
    T__11= 11,
    T__12= 12,
    T__13= 13,
    T__14= 14,
    T__15= 15,
    T__16= 16,
    T__17= 17,
    ID= 4,
    STRING= 5,
    COMMENT= 6,
    WS= 7,
    INT= 8;

// public instance methods/vars
org.antlr.lang.extend(StatemachineParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return StatemachineParser.tokenNames; },
    getGrammarFileName: function() { return "D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g"; }
});
org.antlr.lang.augmentObject(StatemachineParser.prototype, {

    // inline static return class
    rule_Statemachine_return: (function() {
        StatemachineParser.rule_Statemachine_return = function(){};
        org.antlr.lang.extend(StatemachineParser.rule_Statemachine_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:20:1: rule_Statemachine : ( 'events' (events_0+= rule_Event )+ 'end' )? ( 'resetEvents' (resetevents_1+= ID )+ 'end' )? ( 'commands' (commands_2+= rule_Command )+ 'end' )? (states_3+= rule_State )* EOF ;
    // $ANTLR start "rule_Statemachine"
    rule_Statemachine: function() {
        var retval = new StatemachineParser.rule_Statemachine_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal1 = null;
        var string_literal2 = null;
        var string_literal3 = null;
        var string_literal4 = null;
        var string_literal5 = null;
        var string_literal6 = null;
        var EOF7 = null;
        var resetevents_1 = null;
        var list_resetevents_1=null;
        var list_events_0=null;
        var list_commands_2=null;
        var list_states_3=null;
        var events_0 = null;
        var commands_2 = null;
        var states_3 = null;
        var string_literal1_tree=null;
        var string_literal2_tree=null;
        var string_literal3_tree=null;
        var string_literal4_tree=null;
        var string_literal5_tree=null;
        var string_literal6_tree=null;
        var EOF7_tree=null;
        var resetevents_1_tree=null;

        try {
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:20:19: ( ( 'events' (events_0+= rule_Event )+ 'end' )? ( 'resetEvents' (resetevents_1+= ID )+ 'end' )? ( 'commands' (commands_2+= rule_Command )+ 'end' )? (states_3+= rule_State )* EOF )
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:22:2: ( 'events' (events_0+= rule_Event )+ 'end' )? ( 'resetEvents' (resetevents_1+= ID )+ 'end' )? ( 'commands' (commands_2+= rule_Command )+ 'end' )? (states_3+= rule_State )* EOF
            root_0 = this.adaptor.nil();

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:22:2: ( 'events' (events_0+= rule_Event )+ 'end' )?
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==9) ) {
                alt2=1;
            }
            switch (alt2) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:22:3: 'events' (events_0+= rule_Event )+ 'end'
                    string_literal1=this.match(this.input,9,StatemachineParser.FOLLOW_9_in_rule_Statemachine68); 
                    string_literal1_tree = this.adaptor.create(string_literal1);
                    this.adaptor.addChild(root_0, string_literal1_tree);

                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:23:11: (events_0+= rule_Event )+
                    var cnt1=0;
                    loop1:
                    do {
                        var alt1=2;
                        var LA1_0 = this.input.LA(1);

                        if ( (LA1_0==ID) ) {
                            alt1=1;
                        }


                        switch (alt1) {
                        case 1 :
                            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:23:11: events_0+= rule_Event
                            this.pushFollow(StatemachineParser.FOLLOW_rule_Event_in_rule_Statemachine75);
                            events_0=this.rule_Event();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, events_0.getTree());
                            if (org.antlr.lang.isNull(list_events_0)) list_events_0 = [];
                            list_events_0.push(events_0.getTree());



                            break;

                        default :
                            if ( cnt1 >= 1 ) {
                                break loop1;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(1, this.input);
                                throw eee;
                        }
                        cnt1++;
                    } while (true);

                    string_literal2=this.match(this.input,10,StatemachineParser.FOLLOW_10_in_rule_Statemachine80); 
                    string_literal2_tree = this.adaptor.create(string_literal2);
                    this.adaptor.addChild(root_0, string_literal2_tree);



                    break;

            }

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:25:2: ( 'resetEvents' (resetevents_1+= ID )+ 'end' )?
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0==11) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:25:3: 'resetEvents' (resetevents_1+= ID )+ 'end'
                    string_literal3=this.match(this.input,11,StatemachineParser.FOLLOW_11_in_rule_Statemachine86); 
                    string_literal3_tree = this.adaptor.create(string_literal3);
                    this.adaptor.addChild(root_0, string_literal3_tree);

                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:26:16: (resetevents_1+= ID )+
                    var cnt3=0;
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0==ID) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:26:16: resetevents_1+= ID
                            resetevents_1=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Statemachine93); 
                            resetevents_1_tree = this.adaptor.create(resetevents_1);
                            this.adaptor.addChild(root_0, resetevents_1_tree);

                            if (org.antlr.lang.isNull(list_resetevents_1)) list_resetevents_1 = [];
                            list_resetevents_1.push(resetevents_1);



                            break;

                        default :
                            if ( cnt3 >= 1 ) {
                                break loop3;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                                throw eee;
                        }
                        cnt3++;
                    } while (true);

                    string_literal4=this.match(this.input,10,StatemachineParser.FOLLOW_10_in_rule_Statemachine98); 
                    string_literal4_tree = this.adaptor.create(string_literal4);
                    this.adaptor.addChild(root_0, string_literal4_tree);



                    break;

            }

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:28:2: ( 'commands' (commands_2+= rule_Command )+ 'end' )?
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0==12) ) {
                alt6=1;
            }
            switch (alt6) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:28:3: 'commands' (commands_2+= rule_Command )+ 'end'
                    string_literal5=this.match(this.input,12,StatemachineParser.FOLLOW_12_in_rule_Statemachine104); 
                    string_literal5_tree = this.adaptor.create(string_literal5);
                    this.adaptor.addChild(root_0, string_literal5_tree);

                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:29:13: (commands_2+= rule_Command )+
                    var cnt5=0;
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0==ID) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:29:13: commands_2+= rule_Command
                            this.pushFollow(StatemachineParser.FOLLOW_rule_Command_in_rule_Statemachine111);
                            commands_2=this.rule_Command();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, commands_2.getTree());
                            if (org.antlr.lang.isNull(list_commands_2)) list_commands_2 = [];
                            list_commands_2.push(commands_2.getTree());



                            break;

                        default :
                            if ( cnt5 >= 1 ) {
                                break loop5;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(5, this.input);
                                throw eee;
                        }
                        cnt5++;
                    } while (true);

                    string_literal6=this.match(this.input,10,StatemachineParser.FOLLOW_10_in_rule_Statemachine116); 
                    string_literal6_tree = this.adaptor.create(string_literal6);
                    this.adaptor.addChild(root_0, string_literal6_tree);



                    break;

            }

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:31:10: (states_3+= rule_State )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==13) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:31:10: states_3+= rule_State
                    this.pushFollow(StatemachineParser.FOLLOW_rule_State_in_rule_Statemachine123);
                    states_3=this.rule_State();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, states_3.getTree());
                    if (org.antlr.lang.isNull(list_states_3)) list_states_3 = [];
                    list_states_3.push(states_3.getTree());



                    break;

                default :
                    break loop7;
                }
            } while (true);

            EOF7=this.match(this.input,EOF,StatemachineParser.FOLLOW_EOF_in_rule_Statemachine127); 



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Event_return: (function() {
        StatemachineParser.rule_Event_return = function(){};
        org.antlr.lang.extend(StatemachineParser.rule_Event_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:36:1: rule_Event : name_0= ID code_1= ID ;
    // $ANTLR start "rule_Event"
    rule_Event: function() {
        var retval = new StatemachineParser.rule_Event_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var code_1 = null;

        var name_0_tree=null;
        var code_1_tree=null;

        try {
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:36:11: (name_0= ID code_1= ID )
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:37:2: name_0= ID code_1= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Event140); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            code_1=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Event144); 
            code_1_tree = this.adaptor.create(code_1);
            this.adaptor.addChild(root_0, code_1_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Command_return: (function() {
        StatemachineParser.rule_Command_return = function(){};
        org.antlr.lang.extend(StatemachineParser.rule_Command_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:42:1: rule_Command : name_0= ID code_1= ID ;
    // $ANTLR start "rule_Command"
    rule_Command: function() {
        var retval = new StatemachineParser.rule_Command_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var code_1 = null;

        var name_0_tree=null;
        var code_1_tree=null;

        try {
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:42:13: (name_0= ID code_1= ID )
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:43:2: name_0= ID code_1= ID
            root_0 = this.adaptor.nil();

            name_0=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Command157); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            code_1=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Command161); 
            code_1_tree = this.adaptor.create(code_1);
            this.adaptor.addChild(root_0, code_1_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_State_return: (function() {
        StatemachineParser.rule_State_return = function(){};
        org.antlr.lang.extend(StatemachineParser.rule_State_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:48:1: rule_State : 'state' name_0= ID ( 'actions' '{' (actions_1+= ID )+ '}' )? (transitions_2+= rule_Transition )* 'end' ;
    // $ANTLR start "rule_State"
    rule_State: function() {
        var retval = new StatemachineParser.rule_State_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name_0 = null;
        var string_literal8 = null;
        var string_literal9 = null;
        var char_literal10 = null;
        var char_literal11 = null;
        var string_literal12 = null;
        var actions_1 = null;
        var list_actions_1=null;
        var list_transitions_2=null;
        var transitions_2 = null;
        var name_0_tree=null;
        var string_literal8_tree=null;
        var string_literal9_tree=null;
        var char_literal10_tree=null;
        var char_literal11_tree=null;
        var string_literal12_tree=null;
        var actions_1_tree=null;

        try {
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:48:11: ( 'state' name_0= ID ( 'actions' '{' (actions_1+= ID )+ '}' )? (transitions_2+= rule_Transition )* 'end' )
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:49:2: 'state' name_0= ID ( 'actions' '{' (actions_1+= ID )+ '}' )? (transitions_2+= rule_Transition )* 'end'
            root_0 = this.adaptor.nil();

            string_literal8=this.match(this.input,13,StatemachineParser.FOLLOW_13_in_rule_State172); 
            string_literal8_tree = this.adaptor.create(string_literal8);
            this.adaptor.addChild(root_0, string_literal8_tree);

            name_0=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_State176); 
            name_0_tree = this.adaptor.create(name_0);
            this.adaptor.addChild(root_0, name_0_tree);

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:50:3: ( 'actions' '{' (actions_1+= ID )+ '}' )?
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0==14) ) {
                alt9=1;
            }
            switch (alt9) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:50:4: 'actions' '{' (actions_1+= ID )+ '}'
                    string_literal9=this.match(this.input,14,StatemachineParser.FOLLOW_14_in_rule_State181); 
                    string_literal9_tree = this.adaptor.create(string_literal9);
                    this.adaptor.addChild(root_0, string_literal9_tree);

                    char_literal10=this.match(this.input,15,StatemachineParser.FOLLOW_15_in_rule_State183); 
                    char_literal10_tree = this.adaptor.create(char_literal10);
                    this.adaptor.addChild(root_0, char_literal10_tree);

                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:50:27: (actions_1+= ID )+
                    var cnt8=0;
                    loop8:
                    do {
                        var alt8=2;
                        var LA8_0 = this.input.LA(1);

                        if ( (LA8_0==ID) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                        case 1 :
                            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:50:27: actions_1+= ID
                            actions_1=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_State187); 
                            actions_1_tree = this.adaptor.create(actions_1);
                            this.adaptor.addChild(root_0, actions_1_tree);

                            if (org.antlr.lang.isNull(list_actions_1)) list_actions_1 = [];
                            list_actions_1.push(actions_1);



                            break;

                        default :
                            if ( cnt8 >= 1 ) {
                                break loop8;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                                throw eee;
                        }
                        cnt8++;
                    } while (true);

                    char_literal11=this.match(this.input,16,StatemachineParser.FOLLOW_16_in_rule_State190); 
                    char_literal11_tree = this.adaptor.create(char_literal11);
                    this.adaptor.addChild(root_0, char_literal11_tree);



                    break;

            }

            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:51:16: (transitions_2+= rule_Transition )*
            loop10:
            do {
                var alt10=2;
                var LA10_0 = this.input.LA(1);

                if ( (LA10_0==ID) ) {
                    alt10=1;
                }


                switch (alt10) {
                case 1 :
                    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:51:16: transitions_2+= rule_Transition
                    this.pushFollow(StatemachineParser.FOLLOW_rule_Transition_in_rule_State198);
                    transitions_2=this.rule_Transition();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, transitions_2.getTree());
                    if (org.antlr.lang.isNull(list_transitions_2)) list_transitions_2 = [];
                    list_transitions_2.push(transitions_2.getTree());



                    break;

                default :
                    break loop10;
                }
            } while (true);

            string_literal12=this.match(this.input,10,StatemachineParser.FOLLOW_10_in_rule_State202); 
            string_literal12_tree = this.adaptor.create(string_literal12);
            this.adaptor.addChild(root_0, string_literal12_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    rule_Transition_return: (function() {
        StatemachineParser.rule_Transition_return = function(){};
        org.antlr.lang.extend(StatemachineParser.rule_Transition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:57:1: rule_Transition : event_0= ID '=>' state_1= ID ;
    // $ANTLR start "rule_Transition"
    rule_Transition: function() {
        var retval = new StatemachineParser.rule_Transition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var event_0 = null;
        var state_1 = null;
        var string_literal13 = null;

        var event_0_tree=null;
        var state_1_tree=null;
        var string_literal13_tree=null;

        try {
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:57:16: (event_0= ID '=>' state_1= ID )
            // D:\\GAMA\\Gama-Cloud\\Workspace_rap\\org.eclipse.xtext.example.fowlerdsl.web\\bin\\org\\eclipse\\xtext\\example\\fowlerdsl\\web\\parser\\Statemachine.g:58:2: event_0= ID '=>' state_1= ID
            root_0 = this.adaptor.nil();

            event_0=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Transition215); 
            event_0_tree = this.adaptor.create(event_0);
            this.adaptor.addChild(root_0, event_0_tree);

            string_literal13=this.match(this.input,17,StatemachineParser.FOLLOW_17_in_rule_Transition217); 
            string_literal13_tree = this.adaptor.create(string_literal13);
            this.adaptor.addChild(root_0, string_literal13_tree);

            state_1=this.match(this.input,ID,StatemachineParser.FOLLOW_ID_in_rule_Transition221); 
            state_1_tree = this.adaptor.create(state_1);
            this.adaptor.addChild(root_0, state_1_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(StatemachineParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ID", "STRING", "COMMENT", "WS", "INT", "'events'", "'end'", "'resetEvents'", "'commands'", "'state'", "'actions'", "'{'", "'}'", "'=>'"],
    FOLLOW_9_in_rule_Statemachine68: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Event_in_rule_Statemachine75: new org.antlr.runtime.BitSet([0x00000410, 0x00000000]),
    FOLLOW_10_in_rule_Statemachine80: new org.antlr.runtime.BitSet([0x00003800, 0x00000000]),
    FOLLOW_11_in_rule_Statemachine86: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Statemachine93: new org.antlr.runtime.BitSet([0x00000410, 0x00000000]),
    FOLLOW_10_in_rule_Statemachine98: new org.antlr.runtime.BitSet([0x00003000, 0x00000000]),
    FOLLOW_12_in_rule_Statemachine104: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_rule_Command_in_rule_Statemachine111: new org.antlr.runtime.BitSet([0x00000410, 0x00000000]),
    FOLLOW_10_in_rule_Statemachine116: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_rule_State_in_rule_Statemachine123: new org.antlr.runtime.BitSet([0x00002000, 0x00000000]),
    FOLLOW_EOF_in_rule_Statemachine127: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Event140: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Event144: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Command157: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Command161: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_13_in_rule_State172: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_State176: new org.antlr.runtime.BitSet([0x00004410, 0x00000000]),
    FOLLOW_14_in_rule_State181: new org.antlr.runtime.BitSet([0x00008000, 0x00000000]),
    FOLLOW_15_in_rule_State183: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_State187: new org.antlr.runtime.BitSet([0x00010010, 0x00000000]),
    FOLLOW_16_in_rule_State190: new org.antlr.runtime.BitSet([0x00000410, 0x00000000]),
    FOLLOW_rule_Transition_in_rule_State198: new org.antlr.runtime.BitSet([0x00000410, 0x00000000]),
    FOLLOW_10_in_rule_State202: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_rule_Transition215: new org.antlr.runtime.BitSet([0x00020000, 0x00000000]),
    FOLLOW_17_in_rule_Transition217: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_ID_in_rule_Transition221: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();