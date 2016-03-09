/**
 * Copyright 2016 Netbeast.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    function NetbeastNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
        	if (msg.topic === 'lights') {
        		if (msg.payload === 'on')
            		msg.payload = 'Turning lights on';
            	else if (msg.payload === 'off')
            		msg.payload = 'Turning lights off';
            	else
            		msg.payload = 'Payload must be on or off';
            }
            
            else if (msg.topic === 'music') {
            	if (msg.payload === 'on')
            		msg.payload = 'Turning music on';
            	else if (msg.payload === 'off')
            		msg.payload = 'Turning music off';
            	else
            		msg.payload = 'Payload must be on or off'
            }

            else
            	msg.payload = 'Topic must be lights or music';
            
            node.send(msg);
        });
    }
    RED.nodes.registerType("netbeast",NetbeastNode);
}