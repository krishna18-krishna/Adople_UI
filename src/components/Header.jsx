import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Bot, Zap, Users, Building, Globe, Shield, MessageCircle, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const Dropdown = ({ title, children, isOpen, onToggle }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Don't close if clicking on the trigger button
        if (!event.target.closest('[data-dropdown-trigger]')) {
          onToggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        data-dropdown-trigger
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="p-8">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const platformContent = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-600" />
          Overview
        </h3>
        <p className="text-gray-600 mb-4">
          Adople is a cutting-edge AI-powered assistant that transforms enterprise productivity. From automating support tickets to simplifying knowledge discovery, our unified platform empowers teams to get work done faster using natural language.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            AI-driven automation for workflows, answers, and insights
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            24/7 support with contextual understanding
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Built for scalability and secure enterprise environments
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" />
          Features
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900">Conversational AI Interface</h4>
            <p className="text-sm text-gray-600">Interact with enterprise systems in plain language</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Unified Knowledge Access</h4>
            <p className="text-sm text-gray-600">Instantly search across documents, tickets, SOPs, and more</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Auto Ticket Resolution</h4>
            <p className="text-sm text-gray-600">Reduce response time with autonomous support</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Multi-language Support</h4>
            <p className="text-sm text-gray-600">Serve global teams with seamless multilingual AI</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Building className="w-5 h-5 text-blue-600" />
          By Department
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900">IT</h4>
            <p className="text-sm text-gray-600">Automate troubleshooting, access SOPs, triage issues</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">HR</h4>
            <p className="text-sm text-gray-600">Answer policy questions, onboard employees, schedule tasks</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Sales</h4>
            <p className="text-sm text-gray-600">Retrieve lead data, update CRM, prep for meetings</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Support</h4>
            <p className="text-sm text-gray-600">Auto-resolve tickets, deflect FAQs, assist agents</p>
          </div>
        </div>
      </div>
    </div>
  );

  const customersContent = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-blue-600" />
          Testimonials
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "Adople has completely transformed how we handle support tickets—response time is down by 60%!"
            </p>
            <p className="text-sm text-gray-500">— Head of IT, Mid-Sized SaaS Firm</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 italic mb-2">
              "Our HR team now answers employee queries in seconds instead of hours."
            </p>
            <p className="text-sm text-gray-500">— HR Manager, Global Enterprise</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          Success Metrics
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">60% faster ticket resolution</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">70% reduction in agent workload</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">40% improvement in internal search accuracy</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <ArrowRight className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">3x boost in employee productivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const pricingContent = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
        <p className="text-3xl font-bold text-blue-600 mb-4">$49<span className="text-sm text-gray-500">/month</span></p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Up to 1,000 queries/month
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Basic integrations
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Email support
          </li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
        <p className="text-3xl font-bold text-blue-600 mb-4">$199<span className="text-sm text-gray-500">/month</span></p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Up to 10,000 queries/month
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Advanced integrations
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Priority support
          </li>
        </ul>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
        <p className="text-3xl font-bold text-blue-600 mb-4">Custom</p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Unlimited queries
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Custom integrations
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Dedicated support
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Adople</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <Dropdown
                title="Platform"
                isOpen={openDropdown === 'platform'}
                onToggle={() => handleDropdownToggle('platform')}
              >
                {platformContent}
              </Dropdown>

              <Dropdown
                title="Customers"
                isOpen={openDropdown === 'customers'}
                onToggle={() => handleDropdownToggle('customers')}
              >
                {customersContent}
              </Dropdown>

              <Dropdown
                title="Pricing"
                isOpen={openDropdown === 'pricing'}
                onToggle={() => handleDropdownToggle('pricing')}
              >
                {pricingContent}
              </Dropdown>

              <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Resources
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Platform
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Customers
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Resources
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Sign In
                </button>
                <button className="block w-full text-left px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;