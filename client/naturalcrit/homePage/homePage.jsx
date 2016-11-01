var React = require('react');
var _     = require('lodash');
var cx    = require('classnames');

var NaturalCritIcon = require('naturalcrit/svg/naturalcrit.svg.jsx');
var HomebrewIcon = require('naturalcrit/svg/homebrew.svg.jsx');


var HomePage = React.createClass({
		getDefaultProps: function() {
			return {
				tools : [
					{
						id : 'homebrew',
						path : 'http://homebrewery.naturalcrit.com',
						name : 'The Homebrewery',
						icon : <HomebrewIcon />,
						desc : 'Make authentic-looking D&D homebrews using Markdown',

						show : true,
						beta : false
					},
					{
						id : 'tpk',
						path : 'http://tpk.naturalcrit.com',
						name : 'Total PLayer Knoller',
						icon : <HomebrewIcon />,
						desc : 'Effortless custom character sheets',

						show : true,
						beta : true
					},

				]
			};
		},

		renderTool : function(tool){
			if(!tool.show) return null;

			return <a href={tool.path} className={cx('tool', tool.id, {beta : tool.beta})} key={tool.id}>
				<div className='content'>
					{tool.icon}
					<h2>{tool.name}</h2>
					<p>{tool.desc}</p>
				</div>
			</a>;
		},

		renderTools : function(){
			return _.map(this.props.tools, (tool)=>{
				return this.renderTool(tool);
			});
		},

		render : function(){
			return <div className='homePage'>
				<div className='top'>
					<div className='logo'>
						<NaturalCritIcon />
						<span className='name'>
							Natural
							<span className='crit'>Crit</span>
						</span>
					</div>
					<p>Top-tier tools for the discerning DM</p>
				</div>
				<div className='tools'>
					{this.renderTools()}
				</div>
			</div>
		}
	});

module.exports = HomePage;
