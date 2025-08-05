# TABA - Israeli Urban Planning Data Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node.js-16.x+-green.svg)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue.svg)](https://www.ecma-international.org/ecma-262/)

## Overview

TABA is a comprehensive Israeli urban planning data repository that provides structured access to city planning documents, zoning information, and building regulations. The system serves as a centralized platform for accessing and querying urban planning data across Israeli municipalities through both HTTP API and Model Context Protocol (MCP) interfaces.

## Features

- 🏙️ **Comprehensive Planning Data**: Access to 231+ planning records for Israeli cities
- 🔍 **Advanced Search**: Multi-parameter search with location-based filtering
- 🌐 **HTTP API**: RESTful endpoints for programmatic access
- 🤖 **MCP Integration**: AI-friendly tool interface for language models
- 📊 **Structured Data**: JSON and Excel formats for easy integration
- 🇮🇱 **Hebrew Support**: Full RTL support for Hebrew planning documents
- ⚡ **Real-time Updates**: Server-Sent Events for live data synchronization

## Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Arviv123/TABA.git
cd TABA

# Install dependencies
npm install

# Start the server
node iplan_http_server.js
```

### Basic Usage

```javascript
// Start the HTTP server
const server = require('./iplan_http_server.js');

// Server will be available at http://localhost:3000
```

## API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Health Check
```http
GET /
```
Returns server status and basic information.

**Response:**
```json
{
  "status": "healthy",
  "message": "Iplan MCP Server is running",
  "timestamp": "2025-08-05T10:00:00.000Z"
}
```

#### MCP Interface
```http
GET /sse
```
Server-Sent Events endpoint for MCP tool interactions.

**Headers:**
```
Accept: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

## MCP Tools

The server provides several MCP tools for urban planning data access:

### search_plans
Search for planning documents with advanced filtering.

**Parameters:**
- `city` (string): Municipality name (Hebrew)
- `status` (string): Plan approval status
- `planNumber` (string): Specific plan identifier
- `dateRange` (object): Date range filter

**Example:**
```json
{
  "tool": "search_plans",
  "arguments": {
    "city": "אור יהודה",
    "status": "מאושר"
  }
}
```

### get_plan_details
Retrieve detailed information for a specific plan.

**Parameters:**
- `planId` (string): Plan identifier

### search_by_location
Geographic-based plan search.

**Parameters:**
- `coordinates` (array): [longitude, latitude]
- `radius` (number): Search radius in meters

### get_building_restrictions
Access building regulations and zoning information.

**Parameters:**
- `planNumber` (string): Plan identifier
- `propertyId` (string): Specific property identifier

### get_infrastructure_data
Retrieve infrastructure planning information.

**Parameters:**
- `area` (string): Geographic area identifier
- `infrastructureType` (string): Type of infrastructure

### get_conservation_sites
Access conservation and historical site information.

**Parameters:**
- `region` (string): Regional identifier
- `siteType` (string): Conservation site type

## Data Structure

### Planning Records Schema

```json
{
  "totalRecords": 231,
  "plansSmall": [
    {
      "planNumber": "552-0137539",
      "planId": 12345,
      "cityText": "אור יהודה",
      "mahut": "תוכנית מתאר מקומית",
      "status": "מאושר",
      "statusDate": "2023-12-15",
      "documentsSet": {
        "nispachim": [
          {
            "path": "/documents/supplements/",
            "info": "נספחים תכנוניים",
            "codeMismach": "SUP001"
          }
        ],
        "tasritim": [
          {
            "path": "/documents/drawings/",
            "info": "תשריטי תוכנית",
            "codeMismach": "DRW001"
          }
        ],
        "mmg": [
          {
            "path": "/documents/packages/",
            "info": "חבילת מסמכים",
            "codeMismach": "PKG001"
          }
        ],
        "map": {
          "path": "https://ags.iplan.gov.il/...",
          "info": "מפת תוכנית ממשלתית"
        },
        "takanon": [
          {
            "path": "/documents/regulations/",
            "info": "תקנון מפורט",
            "codeMismach": "REG001"
          }
        ]
      }
    }
  ]
}
```

### Document Types

- **nispachim**: Supplementary planning documents
- **tasritim**: Technical drawings and architectural plans
- **mmg**: Complete document packages for download
- **map**: Government mapping system integration
- **takanon**: Detailed building regulations and zoning codes

## Directory Structure

```
TABA/
├── city_plans.json              # Main planning data (231 records)
├── city_plans.xlsx              # Excel version of planning data
├── iplan_http_server.js         # MCP-enabled HTTP server
├── example.js                   # Utility functions and examples
├── Random.md                    # Additional documentation
├── [plan-directories]/          # Individual planning projects
│   ├── plan_details.json       # Detailed plan information
│   └── plan_details.xlsx       # Excel format details
├── README.md                    # This file
└── llms.txt                     # AI-friendly documentation
```

## Usage Examples

### Searching for Plans

```javascript
// Search by city
const cityPlans = await fetch('/sse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    tool: 'search_plans',
    arguments: { city: 'אור יהודה' }
  })
});

// Search by status
const approvedPlans = await fetch('/sse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    tool: 'search_plans',
    arguments: { status: 'מאושר' }
  })
});
```

### Location-Based Search

```javascript
const nearbyPlans = await fetch('/sse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    tool: 'search_by_location',
    arguments: {
      coordinates: [34.8516, 32.0853], // Or Yehuda coordinates
      radius: 1000 // 1km radius
    }
  })
});
```

### Getting Building Restrictions

```javascript
const restrictions = await fetch('/sse', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    tool: 'get_building_restrictions',
    arguments: { planNumber: '552-0137539' }
  })
});
```

## Utility Functions

The `example.js` file provides helpful utilities:

```javascript
const { Calculator, Utils, ArrayHelpers } = require('./example.js');

// Calculator operations
const calc = new Calculator();
const result = calc.add(10, 5); // 15

// Utility functions
const isEven = Utils.isEven(4); // true
const random = Utils.getRandomNumber(1, 100);
const formatted = Utils.formatNumberWithCommas(1234567); // "1,234,567"

// Array helpers
const max = ArrayHelpers.findMax([1, 5, 3, 9, 2]); // 9
const avg = ArrayHelpers.average([1, 2, 3, 4, 5]); // 3
const unique = ArrayHelpers.removeDuplicates([1, 2, 2, 3, 3, 4]); // [1, 2, 3, 4]
```

## Configuration

### Server Configuration

The server can be configured through environment variables:

```bash
export PORT=3000
export IPLAN_BASE_URL="https://ags.iplan.gov.il/arcgisiplan/rest/services"
export CACHE_DURATION=3600
export MAX_SEARCH_RESULTS=100
```

### Data Sources

- **Primary**: Israeli Planning Administration (Iplan) services
- **Base URL**: `https://ags.iplan.gov.il/arcgisiplan/rest/services`
- **Coverage**: Multiple Israeli municipalities
- **Update Frequency**: Real-time through government APIs

## Development

### Local Development

```bash
# Clone and setup
git clone https://github.com/Arviv123/TABA.git
cd TABA
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use ESLint for JavaScript linting
- Follow Prettier formatting rules
- Include JSDoc comments for functions
- Write comprehensive tests for new features

## Use Cases

### Urban Planners
- Access comprehensive planning documents
- Research zoning regulations and building codes
- Compare different planning proposals
- Track plan approval status and history

### Architects and Developers
- Retrieve building restrictions for specific properties
- Access technical drawings and specifications
- Understand local zoning requirements
- Download complete document packages

### Government Agencies
- Centralized access to planning information
- Real-time plan status updates
- Standardized data format for integration
- Historical planning data analysis

### Researchers and Analysts
- Urban development trend analysis
- Planning policy research
- Statistical analysis of building patterns
- Geographic information system integration

### AI and Chatbot Applications
- Planning data for language models
- Automated planning assistance
- Real-time planning information queries
- Integration with MCP-compatible AI systems

## Troubleshooting

### Common Issues

**Server won't start:**
```bash
# Check Node.js version
node --version  # Should be 16.x+

# Check port availability
lsof -i :3000

# Clear npm cache
npm cache clean --force
```

**Data not loading:**
```bash
# Verify JSON file integrity
node -c city_plans.json

# Check file permissions
ls -la city_plans.json

# Restart server
npm restart
```

**MCP tools not responding:**
- Ensure proper JSON formatting in requests
- Check server logs for error messages
- Verify tool names and parameters
- Test with basic health check endpoint first

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: Available in both Hebrew and English
- **Issues**: Report bugs and feature requests on GitHub
- **Community**: Join discussions in the repository
- **Updates**: Follow the repository for latest changes

## Acknowledgments

- Israeli Planning Administration for data access
- Open source community for tools and libraries
- Contributors who help maintain and improve the project

---

**Made with ❤️ for the Israeli urban planning community**

For more information, visit: https://gitmcp.io/Arviv123/TABA/chat